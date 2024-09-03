
import apps  from  '../src/assets/app.jpg'
import photo from '../src/assets/me.jpg'
import test  from '../src/assets/tes.jpg'

function Navbargl(){
return(
    <div className='navbar' >
    <div className='about'>
    <a href="">about</a>  
    <a href="">store</a>
    </div>
     
    <div className='navimages'>
     <div className='gimg'>
     <a href="">gmail</a>  
     <a href="">image</a>
     </div>

     <div className="profilebox">
      <div className="serchlab">
      <img className='application' src={test} alt="" srcset="" />
      </div>
      <div className="apps">
        <img className='application' src={apps} alt="" srcset="" />
      </div>
      <div className="account">
      <img className='application' src={photo} alt="" srcset="" />
      </div>
     </div>
    </div>
  
  </div>
)
}
export default Navbargl