
import './style.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const PriceToggle = ({priceType, handlePriceTypeChange}) => {

    return (
        <div className="toggle-style">
            <ToggleButtonGroup
                value={priceType}
                color="primary"
                exclusive
                onChange={handlePriceTypeChange}
                sx={{
                    "&.Mui-selected": {
                        color: "var(--blue) !important",
                    },
                    borderColor: "var(--blue)",
                    border: "unset !important",
                    "& .MuiToggleButtonGroup-grouped": {
                        border: "2px solid !important",
                        borderColor: "unset",
                        color: "var(--blue)",
                        fontSize: ".9rem"
                    },
                    "& .MuiToggleButton-standard": {
                        color: "var(--blue)",
                    },
                }}
            >
                <ToggleButton value="prices" className='toggle-btn'>
                    Price
                </ToggleButton>
                <ToggleButton value="total_volumes" className='toggle-btn'>
                    Total Volume
                </ToggleButton>
                <ToggleButton value="market_caps" className='toggle-btn'>
                    Market Cap
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default PriceToggle
