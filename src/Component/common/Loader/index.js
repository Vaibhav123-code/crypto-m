import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './style.css'

export default function Loader() {
  return (
    <div className='loader-background'>
      <CircularProgress />
    </div>
  );
}