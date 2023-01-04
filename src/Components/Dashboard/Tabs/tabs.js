import { useState } from "react";
import "./style.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import GridComponent from "../Grid/grid";
import ListComponent from "../List/list";


const TabsComponent = ({ coins, isWatchlistPage }) => {
  const [tabValue, setTabValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
        // main: "#888",
      },
    },
  });

  
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "sans-serif",
    textTransform: "capitalize",
  };

  return (
    <Box className="wrap">
        <ThemeProvider theme={theme}>
            <TabContext value={tabValue}>
                <TabList variant="fullWidth" onChange={handleChange}>
                    <Tab label="Grid" value="grid" sx={style}/>
                    <Tab label="List" value="list" sx={style}/>
                </TabList>
                <TabPanel value="grid" className="tabPanel">
                    <Box className="grid-flex">
                        {coins.map((coin,idx) => (
                          <GridComponent  coin={coin} key={idx} delay={((idx + 5) % 5) * 0.1} isWatchlistPage={isWatchlistPage} />
                        ))}
                    </Box>
                </TabPanel>
                <TabPanel value="list" className="tabPanel">
                    <table className="list-flex">
                        {coins.map((coin,idx) => (
                          <ListComponent  coin={coin} key={idx} delay={((idx + 5) % 5) * 0.1} isWatchlistPage={isWatchlistPage} />
                        ))}
                    </table>
                </TabPanel>
            </TabContext>
        </ThemeProvider>
    </Box>
  );
}

export default TabsComponent;
