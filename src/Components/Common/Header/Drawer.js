import * as React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function MobileDrawer() {
  
    const [flag, setFlag] = useState()

  return (
    <div className='drawer-wrapper'>  
        <React.Fragment>
        <MenuRoundedIcon className='icon' onClick={() => setFlag(true)}/>
            <Drawer anchor={"right"} open={flag} onClose={() => setFlag(false)}>
                <div className='mobile-drawer'>
                    <a href="/"><p className='link'>Home</p></a>
                    <a href="/compare"><p className='link'>Compare</p></a>
                    <a href="/watchlist"><p className='link'>Watchlist</p></a>
                    <a href="/dashboard"><p className='link'>Dashboard</p></a>
                </div>    
            </Drawer>
        </React.Fragment>
    </div>
  );
}
// export default MobileDrawer;