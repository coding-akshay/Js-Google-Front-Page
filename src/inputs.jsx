import mice  from  '../src/assets/mic.jpg'
import cam   from   '../src/assets/cam.jpg'
import lence from '../src/assets/lenc.jpg'


function  Inputs(){
    return(
        <div className='midile box'>
        <div className='googlebox'>
          <h1>Google</h1>
        </div>
        
        <div className='clickbox'>
        <div className="click">
        
          <div className="lence">
            <img className='application' src={lence} alt="" srcset="" />
          </div>
          
            <div  className='serchcl' ><input className='serchclick' type="text" /></div>
          
          <div className="mic">
          <img className='application' src={mice} alt="" srcset="" />
          </div>
        
          <div className="camera">
          <img className='application' src={cam} alt="" srcset="" />
          </div>
        
        </div>
        </div>
        </div> 
    )
}
export default Inputs