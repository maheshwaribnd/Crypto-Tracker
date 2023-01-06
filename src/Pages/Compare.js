import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header/Header'
import SelectCoins from '../Components/Compare/SelectCoins/selectCoins';
import { get100Coins } from '../Functions/get100Coins';

function ComparePage() {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const data = await get100Coins();
    if (data) {
      setAllCoins(data);
    }
  }

  return (
    <div>
      <Header />
      <div style={{marginTop: "7rem"}}>
        <SelectCoins allCoins={allCoins}/>
      </div>
    </div>
  )
}

export default ComparePage
