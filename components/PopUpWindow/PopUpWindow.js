import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import UploadForm from "@/components/UploadForm/UploadForm"
 
const PopUpWindow = () => (
  // eslint-disable-next-line react/no-unknown-property
  <Popup trigger={<button class="ui button" borderless transparent> Upload</button>} modal>
    <div><UploadForm/></div>
  </Popup>
);
export default PopUpWindow;