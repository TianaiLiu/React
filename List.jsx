function List (){

const food1 = "Orange";
const food2 = "Peach";

    return(
<ul>
    <li>Apple</li>
    <li>{food1}</li>
    <li>{food2.toUpperCase()}</li>
</ul>
);
}
export default List;