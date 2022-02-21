1.Default parameters
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  2.returns
  function monitorCount(rows, columns)
{
  return rows * columns;
}
const numOfMonitors = monitorCount (5, 4);
console.log(numOfMonitors);
3. helper function
function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns)
   {
    return monitorCount(rows, columns) *200
  }
  const totalCost = costOfMonitors (5, 4);
  console.log(totalCost);''