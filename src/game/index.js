export default {
    name: 'Home',
    data() {
        return {
            head: document.getElementById('head')
        }
    },
    mounted() {
        window.addEventListener("keypress", e => {
            console.log(String.fromCharCode(e.keyCode));
            this.moveHead(String.fromCharCode(e.keyCode))
        });
    },
    methods: {
        moveHead(key) {
            let speed = 10, // the box will move by 10 pixels on every step
                direction = 1, // 1 = move right; -1 = move left
                boxElement = this.head;

            if (key === "w") {
                const boxLeftPos = boxElement.offsetLeft,
                    boxRightPos = boxLeftPos + boxElement.offsetWidth;
                // When right side of the box goes too far - change direction:
                if (boxRightPos > document.body.offsetWidth) {
                    direction = -1;
                }
                // When left side of the box goes too far - change direction:
                if (boxLeftPos < 0) {
                    direction = 1;
                }
                // Recalculate position:
                boxElement.style.left = (boxLeftPos + speed * direction) + 'px';
            }
        }
    }
}