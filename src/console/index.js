import Draggable from '../components/Draggable.vue'

export default {
    name: 'Console',
    data: function () {
        return {
            positions: {
                clientX: undefined,
                clientY: undefined,
                movementX: 0,
                movementY: 0
            },
            isEnterName: false,
            name: "",
            input: ""
        }
    },
    components: {
        Draggable
    },
    mounted() {
        window.addEventListener("keypress", e => {
            if (!this.isEnterName) {
                //Pressing the enter key
                if (e.keyCode === 13) {
                    this.isEnterName = true
                }
                if (e.keyCode === 8) {
                    this.name = this.name.substring(0, this.name.length - 1);
                } else this.name = this.name + String.fromCharCode(e.keyCode)
            } else if (e.keyCode === 8) {
                this.input = this.input.substring(0, this.input.length - 1);
            } else this.input = this.input + String.fromCharCode(e.keyCode)

        });
    },
    methods: {}
}