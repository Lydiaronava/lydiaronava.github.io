import './Body.css'

function Body() {
    return (
        <div className="content">
            <p>Website under construction... come back soon!</p>
            <div>
                <p>In the mean time, please enjoy this picture of a cute dog.</p>
                <img 
                    class="indy" 
                    src="/indy.jpg" 
                    alt="A picture of a small white dog, a bichon maltais, sitting on a colorful folding chair." 
                    width="50%"
                    height="50%"
                />
            </div>
        </div>
    )
}

export default Body