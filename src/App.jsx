
import './App.css'
import Grandpa from './components/grandpa/Grandpa'
// import Reasuableform from './components/Reasuableform/Reasuableform'

// import HookForm from './hooks/HookForm'
// import RefForm from './components/reffporm/RefForm'
// import SimpleForm from './components/simpleForm'
// import Statefullform from './components/stastefullform/statefullform'

function App() {
//   const handlesubmitsignup =data=>{
//     console.log('sign up',data);
// }
// const handleupdatebtn =data=>{
//   console.log('update profile',data);
// }

  return (
    
    <>
   
      <h2>Form master</h2>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <Statefullform></Statefullform> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <Reasuableform formtitle={'sign up'} handlesubmit={handlesubmitsignup}>
      <div>
        <h2>sign up</h2>
        <p>please sign up right now</p>
      </div>
      </Reasuableform>
      <Reasuableform formtitle={'profile update'} handlesubmit={handleupdatebtn} submittextbtn={'update'}>
      <div>
        <h2>profile update</h2>
        <p>Always keep your profile update</p>
      </div>
      </Reasuableform> */}
    </>
  )
}

export default App
