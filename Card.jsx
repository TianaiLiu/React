import pfp from './image.jpg'
function Card(){
return(
<div className="card">
<img className ="card-pfp" src={pfp} alt="pfp"></img>
<h2>Tni</h2>
<p>I wish you have the courage to trust everyone again like you did the first time.</p>
</div>
);
}
export default Card