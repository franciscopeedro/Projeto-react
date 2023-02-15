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
          <a className='semlinha' onClick={() => setOpenLink(!openLink)}> {openLink ? <AiOutlineMinus size={15} color="black" /> : <AiOutlinePlus size={15} color="black" />}Workplan</a>
          {openLink && <>
            <li><a href="" className='semlinha espaco'>pag1</a></li>
            <li><a href="" className='semlinha espaco'>pag2</a></li>
            <li><a href="" className='semlinha espaco'>pag3</a></li>
          </>}
        </ul>

        <ul>
          <a className='semlinha' onClick={() => setOpenLink2(!openLink2)}> {openLink2 ? <AiOutlineMinus size={15} color="black" /> : <AiOutlinePlus size={15} color="black" />}Workplan</a>
          {openLink2 && <>
            <li><a href="" className='semlinha espaco'>pag1</a></li>
            <li><a href="" className='semlinha espaco'>pag2</a></li>
            <li><a href=""className='semlinha espaco'>pag3</a></li>
          </>}
        </ul>

        <ul>
          <a className='semlinha' onClick={() => setOpenLink3(!openLink3)}> {openLink3 ? <AiOutlineMinus size={15} color="black" /> : <AiOutlinePlus size={15} color="black" />}Workplan</a>
          {openLink3 && <>
            <li><a href=""className='semlinha espaco'>pag1</a></li>
            <li><a href=""className='semlinha espaco'>pag2</a></li>
            <li><a href=""className='semlinha espaco'>pag3</a></li>
          </>}
        </ul>
      </div>
      <div className="principal"><video className="video"controls autoplay src="https://opexeng.com.br/assets/videos/banner_home.mp4"></video></div>
      <div className='lado'></div>
      <div className="modo">
        <a href="" className='letra-azul semlinha'>Workplan |</a>
        <a href="" className='letra-azul semlinha'>Components |</a>
        <a href="" className='letra-azul semlinha'>Anomalies |</a>
        <a href="" className='letra-azul semlinha'>Events | </a>
        <a href="" className='letra-azul semlinha'>Video Index</a>
      </div>
      <div className='opcoes'>
        <a href="" className='letra-azul semlinha'> <FaCheck size={16} color='green'/> Reviwed:0 |</a>
        <a href="" className='letra-azul semlinha'> <FaExclamation size={16} color="red"/> Pending:80 |</a>
        <a href="" className='letra-azul semlinha'> <FaSquareFull size={12} color="green"/> Open:80 |</a>
        <a href="" className='letra-azul semlinha'> <FaSquareFull size={12} color="red"/> Closed:0 |</a>
        <a href="" className='letra-azul semlinha'> <FaSquareFull size={12} color="yellow"/> Recommended By Inspector:80 |</a>
        <a href="" className='letra-azul semlinha'> <FaTh size={12} color="black"/> Color in 3D |</a>
        <a href="" className='letra-azul semlinha'> <FaRegStarHalf size={16} color="black"/>Select Fitered in 3D</a>
      </div>
      <div className='tabela'>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col"><a href="" className='semlinha'>ID</a></th>
              <th scope="col"><a href="" className='semlinha'>Year</a></th>
              <th scope="col"><a href="" className='semlinha'>Code</a></th>
              <th scope="col"><a href="" className='semlinha'>Number</a></th>
              <th scope="col"><a href="" className='semlinha'>Reference</a></th>
              <th scope="col"><a href="" className='semlinha'>Description</a></th>
              <th scope="col"><a href="" className='semlinha'>Depth From</a></th>
              <th scope="col"><a href="" className='semlinha'>Depth to</a></th>
              <th scope="col"><a href="" className='semlinha'>Category</a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><a href="" className='semlinha'>2019</a></td>
              <td><a href="" className='semlinha'>DB</a></td>
              <td><a href="" className='semlinha'>9</a></td>
              <td><a href="" className='semlinha'>19-DB-008</a></td>
              <td><a href="" className='semlinha'>Description</a></td>
              <td><a href="" className='semlinha'>14.000</a></td>
              <td><a href="" className='semlinha'>14.000</a></td>
              <td><a href="" className='semlinha'>Visual Inspection</a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td><a href="" className='semlinha'>2019</a></td>
              <td><a href="" className='semlinha'>DB</a></td>
              <td><a href="" className='semlinha'>9</a></td>
              <td><a href="" className='semlinha'>19-DB-009</a></td>
              <td><a href="" className='semlinha'>Description</a></td>
              <td><a href="" className='semlinha'>0.000</a></td>
              <td><a href="" className='semlinha'>14.000</a></td>
              <td><a href="" className='semlinha'>Visual Inspection</a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><a href="" className='semlinha'>2019</a></td>
              <td><a href="" className='semlinha'>LI</a></td>
              <td><a href="" className='semlinha'>2</a></td>
              <td><a href="" className='semlinha'>19-LI-002</a></td>
              <td><a href="" className='semlinha'>Description</a></td>
              <td><a href="" className='semlinha'>30.000</a></td>
              <td><a href="" className='semlinha'>30.000</a></td>
              <td><a href="" className='semlinha'>Visual Inspection</a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td><a href="" className='semlinha'>2019</a></td>
              <td><a href="" className='semlinha'>DB</a></td>
              <td><a href="" className='semlinha'>3</a></td>
              <td><a href="" className='semlinha'>19-LI-065</a></td>
              <td><a href="" className='semlinha'>Description</a></td>
              <td><a href="" className='semlinha'>5.000</a></td>
              <td><a href="" className='semlinha'>80.000</a></td>
              <td><a href="" className='semlinha'>Visual Inspection</a></td>
            </tr>
          </tbody>
        </table>
      </div>





    </div>
  );
}

export default App;
