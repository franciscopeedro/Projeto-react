import './App.css';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import {FaExclamation} from "react-icons/fa";
import {FaSquareFull} from "react-icons/fa";
import {FaTh} from "react-icons/fa";
import {FaRegStarHalf} from "react-icons/fa";
import { useState } from 'react';
function App() {

  const [openLink, setOpenLink] = useState(false);
  const [openLink2, setOpenLink2] = useState(false);
  const [openLink3, setOpenLink3] = useState(false);



  return (
    <div className='tudo'>
      <div className='cabecalho'>OD:950.00.mm | WHT:35.00mm | ELV:-14.0m </div>
      <div className='menu'>
        <ul>
          <button className='semlinha' onClick={() => setOpenLink(!openLink)}> {openLink ? <AiOutlineMinus size={15} color="black" /> : <AiOutlinePlus size={15} color="black" />}Workplan</button>
          {openLink && <>
            <li> <button className='semlinha espaco'>pag1</button></li>
            <li> <button className='semlinha espaco'>pag2</button></li>
            <li> <button className='semlinha espaco'>pag3</button></li>
          </>}
        </ul>

        <ul>
          <button className='semlinha' onClick={() => setOpenLink2(!openLink2)}> {openLink2 ? <AiOutlineMinus size={15} color="black" /> : <AiOutlinePlus size={15} color="black" />}Workplan</button>
          {openLink2 && <>
            <li><button className='semlinha espaco'>pag1</button></li>
            <li><button className='semlinha espaco'>pag2</button></li>
            <li><button className='semlinha espaco'>pag3</button></li>
          </>}
        </ul>

        <ul>
          <button className='semlinha' onClick={() => setOpenLink3(!openLink3)}> {openLink3 ? <AiOutlineMinus size={15} color="black" /> : <AiOutlinePlus size={15} color="black" />}Workplan</button>
          {openLink3 && <>
            <li><button className='semlinha espaco'>pag1</button></li>
            <li><button className='semlinha espaco'>pag2</button></li>
            <li><button className='semlinha espaco'>pag3</button></li>
          </>}
        </ul>
      </div>
      <div className="principal"><video className="video"controls autoplay src="https://opexeng.com.br/assets/videos/banner_home.mp4"></video></div>
      <div className='lado'></div>
      <div className="modo">
        <button className='letra-azul semlinha'>Workplan |</button>
        <button className='letra-azul semlinha'>Components |</button>
        <button className='letra-azul semlinha'>Anomalies |</button>
        <button className='letra-azul semlinha'>Events | </button>
        <button className='letra-azul semlinha'>Video Index</button>
      </div>
      <div className='opcoes'>
        <button className='letra-azul semlinha'> <FaCheck size={16} color='green'/> Reviwed:0 |</button>
        <button className='letra-azul semlinha'> <FaExclamation size={16} color="red"/> Pending:80 |</button>
        <button className='letra-azul semlinha'> <FaSquareFull size={12} color="green"/> Open:80 |</button>
        <button className='letra-azul semlinha'> <FaSquareFull size={12} color="red"/> Closed:0 |</button>
        <button className='letra-azul semlinha'> <FaSquareFull size={12} color="yellow"/> Recommended By Inspector:80 |</button>
        <button className='letra-azul semlinha'> <FaTh size={12} color="black"/> Color in 3D |</button>
        <button className='letra-azul semlinha'> <FaRegStarHalf size={16} color="black"/>Select Fitered in 3D</button>
      </div>
      <div className='tabela'>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col"><button className='semlinha'>ID</button></th>
              <th scope="col"><button className='semlinha'>Year</button></th>
              <th scope="col"><button className='semlinha'>Code</button></th>
              <th scope="col"><button className='semlinha'>Number</button></th>
              <th scope="col"><button className='semlinha'>Reference</button></th>
              <th scope="col"><button className='semlinha'>Description</button></th>
              <th scope="col"><button className='semlinha'>Depth From</button></th>
              <th scope="col"><button className='semlinha'>Depth to</button></th>
              <th scope="col"><button className='semlinha'>Category</button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><button className='semlinha'>2019</button></td>
              <td><button className='semlinha'>DB</button></td>
              <td><button className='semlinha'>9</button></td>
              <td><button className='semlinha'>19-DB-008</button></td>
              <td><button className='semlinha'>Description</button></td>
              <td><button className='semlinha'>14.000</button></td>
              <td><button className='semlinha'>14.000</button></td>
              <td><button className='semlinha'>Visual Inspection</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td><button className='semlinha'>2019</button></td>
              <td><button className='semlinha'>DB</button></td>
              <td><button className='semlinha'>9</button></td>
              <td><button className='semlinha'>19-DB-009</button></td>
              <td><button className='semlinha'>Description</button></td>
              <td><button className='semlinha'>0.000</button></td>
              <td><button className='semlinha'>14.000</button></td>
              <td><button className='semlinha'>Visual Inspection</button></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><button className='semlinha'>2019</button></td>
              <td><button className='semlinha'>LI</button></td>
              <td><button className='semlinha'>2</button></td>
              <td><button className='semlinha'>19-LI-002</button></td>
              <td><button className='semlinha'>Description</button></td>
              <td><button className='semlinha'>30.000</button></td>
              <td><button className='semlinha'>30.000</button></td>
              <td><button className='semlinha'>Visual Inspection</button></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td><button className='semlinha'>2019</button></td>
              <td><button className='semlinha'>DB</button></td>
              <td><button className='semlinha'>3</button></td>
              <td><button className='semlinha'>19-LI-065</button></td>
              <td><button className='semlinha'>Description</button></td>
              <td><button className='semlinha'>5.000</button></td>
              <td><button className='semlinha'>80.000</button></td>
              <td><button className='semlinha'>Visual Inspection</button></td>
            </tr>
          </tbody>
        </table>
      </div>





    </div>
  );
}

export default App;
