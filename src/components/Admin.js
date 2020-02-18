import React,{useEffect,useState} from 'react'
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom';
import AdminUser from '../Admin/AdminUser'
import AdMenu from '../Admin/Admenu'
import AdCourse from '../Admin/AdCourse'
import Layout from './Layout'
import AdNewCourse from '../Admin/AdNewCourse'

 const Admin = (props) => {
    
    const [admin , setAdmin] = useState(false);
    const [user,setUser] = useState([]);
    const adpass = props.match.params.password;
    const ademail = localStorage.getItem('info-email');
    // console.log( adpass)
    // console.log( ademail)
    // console.log(admin)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/Admin/Login/${adpass}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               
                email:ademail,
               
            })
           })
           .then(res => res.json(res))
           .then(data =>{
               console.log(data)
               if(data[0].email === ademail ){
                   setAdmin(true)
               }
           })

        }
    , [])

   


   
     
    if(admin){
        return (
            <div>
              <BrowserRouter>
               <Layout title='Admin Panel' describtion='Only for admin user' children='bg-success'>
                     <p>This panel is desinged to customise the client website</p>
               </Layout>    
               <AdMenu/>
                 <Switch>
                    <Route path='/AdUser' exact component={AdminUser} />
                    <Route path='/AdCourse' exact component={AdCourse} />
                    <Route path='/AdNewCourse' exact component={AdNewCourse} />

                 </Switch>
               
              
              </BrowserRouter>
            </div>
        )
    }
    else{
        return(
           <div>
               Npot admin
           </div>
        )
    }
    
}
export default Admin;
