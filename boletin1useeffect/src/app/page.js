"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Ejercicio1 from "./Ejercicio1"
import Ejercicio2 from "./Ejercicio2"
import Ejercicio3 from "./Ejercicio3"
import Ejercicio4 from "./Ejercicio4"
import Ejercicio5 from "./Ejercicio5"
import Ejercicio6 from "./Ejercicio6"


export default function Home() {

  return (
    <div>
      <h1>Ejercico1</h1>
      <Ejercicio1/>
      <br/>
      <h1>Ejercico2</h1>
      <Ejercicio2/>
      <br/>
      <h1>Ejercico3</h1>
      <Ejercicio3/>
      <br/>
      <h1>Ejercico4</h1>
      <Ejercicio4/>
      <br/>
      <h1>Ejercico5</h1>
      <Ejercicio5/>
      <br/>
      <h1>Ejercico6</h1>
      <Ejercicio6/>
    </div>
  );
}
