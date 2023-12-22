import logo from './logo.svg';
import './App.css';
import DemoComponet from './DemoComponet/DemoComponet';
import DemoFuctionComponent from './DemoComponet/DemoFuctionComponent';
import ExLayout from './ExLayout/ExLayout';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DataBinding from './DataBinding/DataBinding';
import DemoState from './DemoState/DemoState';
import DemoProps from './DemoProps/DemoProps';
import EX_Car from './EX_Car/EX_Car';
import EX_Car_v2 from './EX_Car_v2/EX_Car_v2';
import EX_Car_v3 from './EX_Car_v3/EX_Car_v3';
import EX_Car_v4 from './EX_Car_v4/EX_Car_v4';
import Test_EX_Car from './Test_EX_Car/Test_EX_Car';
import EX_Shose from './EX_Shose/EX_Shose';
import DemoRedux from './DemoRedux/DemoRedux';
import EX_Shose_Redux from './EX_Shose_Redux/EX_Shose_Redux';



function App() {
  return (
    <div className="App">
    {/* Buoi 1 */}
      {/* <DemoComponet/>
      <DemoFuctionComponent/>
      <ExLayout/> */}
      
    {/* Buoi 2 */}
    {/* <RenderWithMap/> */}
     {/* <DataBinding/> */}
     {/* <DemoState/> */}

     {/* Buổi 3 */}
     {/* <DemoProps/> */}
     {/* <EX_Car/> */}
     {/* <EX_Car_v2/> */}
     {/* <EX_Car_v3/> */}
     {/* => V3: Sử dụng render with map */}
     {/* <EX_Car_v4/> */}
     {/* <Test_EX_Car/> */}
     
     {/* Buoi 4 */}
     {/* <EX_Shose/> */}

     {/* Buoi 5 */}
     {/* <DemoRedux/> */}
     <EX_Shose_Redux/>
    </div>
  );
}

export default App;
