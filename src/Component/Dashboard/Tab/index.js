import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import './style.css';
import Grid from '../Grid';
import Button from '../../common/Button';
import List from '../LIst';


export default function Tabs({coins,setSearch}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue)",
    },
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    TextTrasform: "capitalize"
  }
  
  return (
    <div >
      <TabContext value={value}>
        <div style={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}  variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </div>

        <TabPanel value="grid">
           <div className='grid-flex'>
                { coins.length > 0 ? (
                    coins.map((coin, i) => (
                        <Grid coin={coin} key={i} delay={(i % 4) * 0.2}/> 
                    ))
                ) : (
                  <div>
                    <h1 style={{textAlign:"center"}} >
                    Sorry, Couldn't find the coin you're looking for 😞 </h1>
                    
                    <div style={{
                      display:"flex",
                      justifyContent: "center",
                      margin: "2rem"
                    }}>
                      <Button text={"clear search"} onClick={()=> setSearch("")}/>
                    </div>
                  </div>
                )
                }
           </div>
        </TabPanel>

        <TabPanel value="list">
        <table className="list-flex">
          {coins.length > 0 ? (
            coins.map((coin, i) => (
              <List coin={coin} key={i} delay={(i % 8) * 0.2} />
            ))
          ) : (
            <div>
              <h1 style={{ textAlign: "center" }}>
                Sorry, Couldn't find the coin you're looking for 😞
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem",
                }}
              >
                <Button text="Clear Search" onClick={() => setSearch("")} />
              </div>
            </div>
          )}
        </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}