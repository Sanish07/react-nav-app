import {Component} from 'react';

class NavComp extends Component {

  obj = this.props.navInfo;

  render(){
  return (
      <nav>
        <ul style={{listStyle : 'none', background : '#1f1f1f', color : 'white', padding : '2vh 2vw'}}>
            <li style={{display : 'inline'}}><b><a style={{textDecoration : 'none', color : 'white',fontSize : '1.4rem'}} href='/silvermedia'>{this.obj.companyName}</a></b></li>
            <div className='items-con'>
            {
              this.obj.navItems.map((navItem, index)=>(
                <li key={index} className='nav-items'><a href={"/"+navItem}>{navItem}</a></li>
              ))
            }
            </div>
        </ul>
      </nav>
  );
  }
}

export default NavComp;
