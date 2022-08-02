const animation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            type: "tween",
            ease: "easeOut",
        },
    },
};

const navbarAnimation = {
    hidden: { y: -10, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1,
            type: "tween",
            staggerChildren: 0.5,
        },
    },
};
export { navbarAnimation }
export default animation;
