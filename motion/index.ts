export const wrapperVariants = {
   open: {
      scaleY: 1,
      transition: {
         when: "beforeChildren",
         staggerChildren: 0.1,
      },
   },
   closed: {
      scaleY: 0,
      transition: {
         when: "afterChildren",
         staggerChildren: 0.1,
      },
   },
};

export const iconVariants = {
   open: { rotate: 180 },
   closed: { rotate: 0 },
};

export const itemVariants = {
   open: {
      opacity: 1,
      y: 0,
      transition: {
         when: "beforeChildren",
      },
   },
   closed: {
      opacity: 0,
      y: -15,
      transition: {
         when: "afterChildren",
      },
   },
};

export const navVariants = {
   hidden: { y: "-100%" },
   vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 }, }
};