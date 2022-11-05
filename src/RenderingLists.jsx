const listForRender = [
  { id: 0, value: 3, name: "List item value 3" },
  { id: 1, value: 4, name: "List item value 4" },
  { id: 2, value: 10, name: "List item value 10" },
  { id: 3, value: 13, name: "List item value 13" },
  { id: 4, value: 62, name: "List item value 62" },
  { id: 5, value: 22, name: "List item value 22" },
  { id: 6, value: 47, name: "List item value 47" },
  { id: 7, value: 7, name: "List item value 7" },
  { id: 8, value: 8, name: "List item value 8" },
];

const List = () => { 

const fullList = listForRender.map(item => <li key={item.id}>{item.name}</li>);
const filteredList = listForRender.filter(item => item.value % 2 === 0);

  return ( 
    <>
        <section>
            <h1>Full List</h1>
            <ul>
                {fullList}
            </ul>            
        </section>
        <section>
            <h1>Filtered List</h1>
            <ul>
                {filteredList.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>            
        </section>
    </>
  )
}    

export default List;