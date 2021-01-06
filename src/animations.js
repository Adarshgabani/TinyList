export const fadeIn = {
    hidden: {
        opacity: 0,
        y: '-50%',
    },
    show: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: 0.25,
        },


    },
    removed: {
        opacity: 0,
    },

};
export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: 'easeOut'
        }
    },
    removed: {
        opacity: 0,
    },

}