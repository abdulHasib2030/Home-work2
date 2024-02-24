function main(){

  const plus = document.getElementById('plus')
  let tbody = document.getElementById('tbody')
 
  plus.addEventListener('click',function (){
    let rowHtml = `
    <th ><input  class="form-control" type="text" name="" id=""></th>
    <td><input  class="form-control" type="text" name="" id=""></td>
    <td><input  class="form-control" type="text" name="" id=""></td>
    <td><input  class="form-control" type="number" name="" id=""></td>
    <td ><i style="cursor: pointer;" id="minus" class="bi bi-file-excel-fill text-danger p-3 fs-3 remove"></i></td>
  `;
  let newtr = document.createElement('tr')
  newtr.innerHTML = rowHtml
  tbody.appendChild(newtr)
 
  });

  tbody.addEventListener('click', function(e){
    if (e.target.classList.contains('remove')){
      var tdParent = e.target.parentNode;
      var trParent = tdParent.parentNode;
      if (trParent){
        trParent.parentNode.removeChild(trParent)
      }
    }
  })
  
}
main()