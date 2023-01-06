import React, { useState } from 'react'
import "./style.css";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import SelectDays from '../../Coin/SelectDays/selectDays'

export default function SelectCoins({ allCoins }) {

    const [coin1, setCoin1] = useState("bitcoin");
    const [coin2, setCoin2] = useState("bitcoin");

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
        <div className="select-coin">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small"></InputLabel>
                <div className="head-text">
                    <p>Select Coin1</p>
                    <Select
                        //   value={allCoins}
                        onChange={(e) => setCoin1(e.target.value)}
                        sx={selectStyle}
                    >
                        {allCoins.map((coin, idx) => (
                            <MenuItem key={idx} value={coin.id} > {coin.name} </MenuItem>
                        ))}

                    </Select>
                </div>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small"></InputLabel>
                <div className="head-text">
                    <p>Select Coin2</p>
                    <Select
                        //   value={allCoins}
                        onChange={(e) => setCoin1(e.target.value)}
                        sx={selectStyle}
                    >
                        {allCoins.map((coin, idx) => (
                            <MenuItem key={idx} value={coin.id} > {coin.name} </MenuItem>
                        ))}

                    </Select>
                </div>
            </FormControl>

            <SelectDays />
        </div>
    );
}
