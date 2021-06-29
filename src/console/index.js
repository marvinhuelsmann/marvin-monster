import Draggable from '../components/Draggable.vue'

//add your command
const commands = [
    {input: "test", output: "testing, testing..."},
    {input: "corona", output: "For the Covid 19 Pandemic, one Virus on the Page!"},
    {input: "help", output: "Watch on the GitHub Repo and spy the commands! (https://github.com/marvinhuelsmann/marvin-monster)"},
    {input: "projects", output: "My Projects are on the marvhuelsmann.de Site"},
    {input: "mh", output: "Ouh hello im Marvin Hülsmann"},
    {input: "rufusmai", output: "check this awesome site: https://rufusmai.com"}
]

//wrong keyboard keys
const wrongKeyBoardBinds = [
    'Tab', 'Shift', 'Control', 'Alt', 'Meta', 'CapsLock',
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Dead'
]

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
            isEnterName: this.$store.state.username != null,
            output: "",
            name: this.$store.state.username == null ? '' : this.$store.state.username,
            input: ""
        }
    },
    components: {
        Draggable
    },
    mounted() {
        window.addEventListener("keydown", e => {
            if (wrongKeyBoardBinds.includes(e.key)) return;
            if (!this.isEnterName) {
                // Pressing the enter key
                if (e.key === "Enter") {
                    this.$store.commit('SET_USERNAME', this.name)
                    this.isEnterName = true
                    return;
                }
                if (e.key === "Backspace") {
                    this.name = this.name.substring(0, this.name.length - 1);
                } else this.name = this.name + e.key
            } else if (e.key === "Backspace") {
                this.input = this.input.substring(0, this.input.length - 1);
            } else {
                if (e.key === "Enter") {
                    let isFind = false;
                    for (let i = 0; i < commands.length; i++) {
                        if (commands[i].input === this.input) {
                            this.output = commands[i].output
                            isFind = true
                        }
                    }
                    if (!isFind) {
                        this.output = "command not found: " + this.input
                    }

                    this.input = ""
                } else this.input = this.input + e.key
            }

        });
    },
    methods: {
        logout() {
            this.$store.commit('REMOVE_USERNAME')
            window.location.reload()
        }
    }
}
