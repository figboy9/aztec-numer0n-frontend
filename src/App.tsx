import "@mantine/core/styles.css";
import { MantineProvider, Box,Button, PinInput, Card as MantineCard, Grid, AspectRatio, Center, Container, AppShell, SimpleGrid } from "@mantine/core";
import { theme } from "./theme";
import { useState } from "react";
import { NumberFormatValues } from 'react-number-format';

export default function App() {
  return (
    <MantineProvider theme={theme}>    
      <AppShell   withBorder>
        <AppShell.Main >
          <Game>
          </Game>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

function Game() {
  const numLen = 3
  return (
    <>
      <Container>
        <SimpleGrid cols={2}>
          <PlayerBoard numLen={numLen}></PlayerBoard>
          <EnemyBoard numLen={numLen}></EnemyBoard> 
        </SimpleGrid>
      </Container>
    </>
  )
}

function PlayerBoard({numLen}) {
  return (
    <>
      <Player numLen={numLen}/>
    </>
  )
}

function EnemyBoard({numLen}) {
  return (
    <>
      <Enemy numLen={numLen}/>
    </>
  )
}

function Player ({numLen}: {numLen: number}) {
  const [nums,setNums] = useState<number[]>(Array(numLen).fill(null))
  const [isInit,setIsInit] = useState(false)
  console.log(nums)

  function handleSetNum(i: number) {
    return (num: number|string) => {
      if (nums.includes(Number(num))) return

      const nextNums = nums.slice()
      nextNums[i] = Number(num)
      setNums(nextNums)
    }
  }

  return (
    <>
      <Grid style={{outline: "1px solid blue"}}>
        {nums.map((_, i)=>{
            return (<Card key={i} num={nums[i]}/>)
        })}
      </Grid>
      {/* {!(isInit) && <Button variant="filled" color="violet">Start</Button>} */}
    </>
  )
}

function Enemy({numLen}: {numLen: number}) {
  const [nums,setNums] = useState<number[]>(Array(numLen).fill(null))
  // const numLen = 3
  return (
    <>
      <Grid style={{outline: "1px solid red"}}>
        {nums.map((n, i)=>{
          return (<Card key={i} num={n}/>)
          })}
      </Grid>
    </>
  )
}

function CallHistory() {
}

function Card({
  num,
  // onSetNum,
  // isInit
}) {

  // function isValidNum(newNum: NumberFormatValues) {
  //   return  Number(newNum.value) >= 0 && Number(newNum.value) <= 9
  // }

  return (
    <Grid.Col 
      // style={{outline: "1px solid red"}} 
      span={4}
      >
      {/* <AspectRatio ratio={1080 / 720} maw={300} mx="auto"> */}
        <MantineCard shadow="sm" padding="lg" radius="lg" withBorder>
          {(num == null)? "?": num}
        </MantineCard>
      {/* </AspectRatio> */}
    </Grid.Col>

    // <NumberInput
    //   min={0}
    //   max={9}
    //   // disabled={isInit}
    //   value={num}
    //   onChange={onSetNum}
    //   isAllowed={isValidNum}
    // />
  )
}



function Call({
}) {

  // function isValidNum(newNum: NumberFormatValues) {
  //   return  Number(newNum.value) >= 0 && Number(newNum.value) <= 9
  // }

  return (
    <PinInput 
      type={/^[0-9]*$/}
      inputType="number"
      inputMode="numeric"
      value={num}
      disabled={isInit}
      onChange={onSetNum}
    />
    // <NumberInput
    //   min={0}
    //   max={9}
    //   // disabled={isInit}
    //   value={num}
    //   onChange={onSetNum}
    //   isAllowed={isValidNum}
    // />
  )
}