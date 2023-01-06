import React, { useState } from 'react'
import "./style.css";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import SelectDays from '../../Coin/SelectDays/selectDays'

export default function SelectCoins({ allCoins, coin1, coin2, days, handleCoinChange, handleDaysChange }) {

    const selectStyle = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
    };

    return (
        <div className="select-flex">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small"></InputLabel>
                    <p>Crypto 1</p>
                    <Select
                        className='select-coin'
                        value={coin1}
                        onChange={(e) => handleCoinChange(e, true)}
                        sx={selectStyle}
                    >
                        {allCoins.filter((coin) => coin.id != coin2).map((coin, idx) => (
                            <MenuItem key={idx} value={coin.id} > {coin.name} </MenuItem>
                        ))}

                    </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small"></InputLabel>
                    <p>Crypto 2</p>
                    <Select
                        className='select-coin'
                        value={coin2}
                        onChange={(e) => handleCoinChange(e, false)}
                        sx={selectStyle}
                    >
                        {allCoins.filter((coin) => coin.id != coin1).map((coin, idx) => (
                            <MenuItem key={idx} value={coin.id} > {coin.name} </MenuItem>
                        ))}

                    </Select>
            </FormControl>

            <div style={{marginTop: "3.4rem"}}>
            <SelectDays days={days} handleDaysChange={(e) => handleDaysChange} noText={true} />
            </div>
        </div>
    );
}
