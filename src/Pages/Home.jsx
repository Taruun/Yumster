import Popular from "../components/Popular";
import Veggies from "../components/Veggies";
import styled from "styled-components";
import { motion } from "framer-motion";

function Home() {
  return (
    <Margin>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Veggies />
        <Popular />
      </motion.div>
    </Margin>
  );
}
const Margin = styled.div`
  margin: 0% 20%;
`;
export default Home;
