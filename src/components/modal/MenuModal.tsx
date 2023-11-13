import { Link } from "react-router-dom";
import styles from "./MenuModal.module.css";
import { useTheme } from "../../context/ThemeContextProvider";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100%;
`;

interface MenuModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const modalVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  leaving: {
    x: -500,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const MenuModal = ({ openModal, setOpenModal }: MenuModalProps) => {
  const { darkMode } = useTheme();
  return (
    <AnimatePresence>
      {openModal ? (
        <Wrapper
          variants={modalVariants}
          initial="initial"
          animate="visible"
          exit="leaving"
          className={darkMode ? styles.darkMode : styles.lightMode}
          onClick={() => setOpenModal(false)}
        >
          <ul
            className={
              darkMode ? styles["dark-menu-list"] : styles["light-menu-list"]
            }
          >
            <li>
              <Link to={"/fashion"}>패션</Link>
            </li>
            <li>
              <Link to={"/accessory"}>액세서리</Link>
            </li>
            <li>
              <Link to={"/digital"}>디지털</Link>
            </li>
          </ul>
        </Wrapper>
      ) : null}
    </AnimatePresence>
  );
};
