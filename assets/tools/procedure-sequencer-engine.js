// Shared drag/reorder engine for every Procedure Sequencer sub-page.
// Each page calls initSequencer({ storageKey, steps }) where steps is an
// ARRAY ALREADY IN THE CORRECT RULE-BOOK ORDER — the engine shuffles them
// for display and checks the learner's order against that original array.

function shuffleNotSame(items){
  if(items.length < 2) return items.slice();
  let arr;
  do{
    arr = items.slice();
    for(let i=arr.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
  } while(arr.every((v,i)=>v.id===items[i].id));
  return arr;
}

function initSequencer(cfg){
  const { storageKey, steps } = cfg;
  let order = shuffleNotSame(steps);
  let dragSrcIndex = null;

  const listEl = document.getElementById("stepList");
  const resultEl = document.getElementById("psResult");
  const checkBtn = document.getElementById("checkOrderBtn");

  function render(){
    listEl.innerHTML = "";
    order.forEach((step, i)=>{
      const row = document.createElement("div");
      row.className = "step-item";
      row.draggable = true;
      row.dataset.index = i;
      row.innerHTML = `
        <span class="grip">⠿</span>
        <span class="num">${i+1}</span>
        <span class="txt">${step.text}</span>
        <span class="arrows">
          <button class="up" ${i===0?"disabled":""} aria-label="Move up">▲</button>
          <button class="down" ${i===order.length-1?"disabled":""} aria-label="Move down">▼</button>
        </span>
      `;
      row.querySelector(".up").addEventListener("click", ()=> move(i, i-1));
      row.querySelector(".down").addEventListener("click", ()=> move(i, i+1));

      row.addEventListener("dragstart", ()=>{ dragSrcIndex = i; row.classList.add("dragging"); });
      row.addEventListener("dragend", ()=> row.classList.remove("dragging"));
      row.addEventListener("dragover", (e)=> e.preventDefault());
      row.addEventListener("drop", (e)=>{
        e.preventDefault();
        if(dragSrcIndex === null) return;
        move(dragSrcIndex, i);
        dragSrcIndex = null;
      });

      listEl.appendChild(row);
    });
  }

  function move(from, to){
    if(to < 0 || to >= order.length) return;
    const [item] = order.splice(from, 1);
    order.splice(to, 0, item);
    render();
  }

  checkBtn.addEventListener("click", ()=>{
    const correctIds = steps.map(s=>s.id);
    const givenIds = order.map(s=>s.id);
    const allCorrect = correctIds.every((id, i)=> id === givenIds[i]);

    [...listEl.children].forEach((row, i)=>{
      row.classList.remove("correct","incorrect");
      row.classList.add(givenIds[i] === correctIds[i] ? "correct" : "incorrect");
    });

    if(allCorrect){
      resultEl.textContent = "✓ Correct order!";
      resultEl.className = "ps-result ok";
      localStorage.setItem(storageKey, "correct");
    } else {
      resultEl.textContent = "✗ Not quite — check the highlighted steps and try again.";
      resultEl.className = "ps-result bad";
      localStorage.setItem(storageKey, "incorrect");
    }
  });

  render();
}
