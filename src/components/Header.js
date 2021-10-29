import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { motion, useViewportScroll } from "framer-motion"
import { useAnimation } from "framer-motion"

// Styles
import { Container, Flex } from "../styles/globalStyles"
import {
  HeaderSection,
  Navigation,
  Menu,
  Logo,
  Socials,
} from "../styles/headerStyles"

const Header = () => {
  // Animation

  const controls = useAnimation()

  const menuAnimation = {
    initial: {
      x: 0,
      transition: {
        duration: 1.6,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    triggered: {
      x: `-5vw`,
      transition: {
        duration: 1.6,
        delay: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  }

  const logoAnimation = {
    initial: {
      opacity: 1,
      display: `block`,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    triggered: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    hide: {
      display: `none`,
      transition: {
        delay: 0.8,
      },
    },
  }

  const navAnimation = {
    initial: {
      display: `block`,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    triggered: {
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    hide: {
      display: `none`,
      transition: {
        delay: 2,
      },
    },
  }

  const navChildAnimation = {
    initial: {
      opacity: 1,
      display: `inline-block`,
    },
    triggered: {
      opacity: 0,
    },
  }

  const { scrollY } = useViewportScroll()
  const [accordian, setAccordian] = useState(0)

  scrollY.onChange(x => {
    setAccordian(x > 200 ? 1 : 0)
  })

  useEffect(() => {
    if (accordian) {
      controls.start("triggered")
      controls.start("hide")
    } else {
      controls.start("initial")
    }
  }, [accordian, controls])

  return (
    <>
      <HeaderSection>
        <Container flex>
          <Menu variants={menuAnimation} animate={controls} initial="initial">
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
          <Flex spaceBetween>
            <Navigation
              variants={navAnimation}
              animate={controls}
              initial="initial"
            >
              <Link className="navLink" href="/">
                <motion.h3 variants={navChildAnimation}>Foodies</motion.h3>
              </Link>
              <Link className="navLink" href="/roadmap">
                <motion.h3 variants={navChildAnimation}>Roadmap</motion.h3>
              </Link>
              <Link className="navLink" href="/faq">
                <motion.h3 variants={navChildAnimation}>FAQs</motion.h3>
              </Link>
            </Navigation>
            <Socials
              variants={logoAnimation}
              animate={controls}
              initial="initial"
            >
              <Flex>
                <div className="icon instagram">
                  <a
                    href="https://www.instagram.com/foodies.nft/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fillRule="evenodd"
                    >
                      <path d="M8.923 12c0-1.699 1.377-3.076 3.077-3.076s3.078 1.376 3.078 3.076-1.379 3.077-3.078 3.077-3.077-1.378-3.077-3.077zm7.946-.686c.033.225.054.453.054.686 0 2.72-2.204 4.923-4.922 4.923s-4.923-2.204-4.923-4.923c0-.233.021-.461.054-.686.031-.221.075-.437.134-.647h-1.266v6.719c0 .339.275.614.616.614h10.769c.34 0 .615-.275.615-.615v-6.719h-1.265c.058.211.102.427.134.648zm.515-5.314h-1.449c-.341 0-.615.275-.615.615v1.45c0 .34.274.616.615.616h1.449c.34 0 .616-.276.616-.616v-1.45c0-.34-.275-.615-.616-.615zm6.616-1v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 .846c0-1.019-.826-1.846-1.846-1.846h-12.308c-1.019 0-1.846.827-1.846 1.846v12.307c0 1.02.827 1.847 1.846 1.847h12.309c1.019 0 1.845-.827 1.845-1.847v-12.307z" />
                    </svg>
                  </a>
                </div>
                <div className="icon discord">
                  <a
                    href="https://discord.com/invite/qZqny3JP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fillRule="evenodd"
                    >
                      <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-3.288-4.888l-.424-1.48 1.024.952.968.896 1.72 1.52v-14.352c0-.912-.736-1.648-1.64-1.648h-10.72c-.904 0-1.64.736-1.64 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072zm-1.44-3.664c1.768-.056 2.448-1.216 2.448-1.216 0-2.576-1.152-4.664-1.152-4.664-1.152-.864-2.248-.84-2.248-.84l-.112.128c1.36.416 1.992 1.016 1.992 1.016-.832-.456-1.648-.68-2.408-.768-.576-.064-1.128-.048-1.616.016l-.136.016c-.28.024-.96.128-1.816.504l-.472.232s.664-.632 2.104-1.048l-.08-.096s-1.096-.024-2.248.84c0 0-1.152 2.088-1.152 4.664 0 0 .672 1.16 2.44 1.216l.536-.664c-1.016-.304-1.4-.944-1.4-.944l.224.136.032.024.032.018.009.004.031.018c.2.112.4.2.584.272.328.128.72.256 1.176.344.6.112 1.304.152 2.072.008.376-.064.76-.176 1.16-.344.28-.104.592-.256.92-.472 0 0-.4.656-1.448.952l.528.648zm-3.72-3.736c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />{" "}
                    </svg>
                  </a>
                </div>
                <div className="icon twitter">
                  <a
                    href="https://twitter.com/Foodies_CNFT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fillRule="evenodd"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                    </svg>
                  </a>
                </div>
              </Flex>
            </Socials>
          </Flex>
          <Logo variants={logoAnimation} animate={controls} initial="initial">
            {/* <motion.div animate={{ opacity: 0 }}> */}
            <h1>Foodies</h1>
            {/* </motion.div> */}
          </Logo>
        </Container>
      </HeaderSection>
    </>
  )
}

export default Header
