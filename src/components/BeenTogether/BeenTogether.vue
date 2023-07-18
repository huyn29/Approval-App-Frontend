<template>
    <div class="container">
        <div class="required">
            <button
                class="bg-white px-16 py-3 rounded-3xl absolute left-10 top-10 font-bold hover:shadow-xl hover:bg-slate-300"
                @click="$router.push('/')">
                Approval
            </button>
            <button
                class="bg-white px-16 py-3 rounded-3xl absolute right-10 top-10 font-bold hover:shadow-xl hover:bg-slate-300"
                @click="setupDate">
                Setup
            </button>
            <!-- The Modal -->
            <div id="setupDate" class="modal">
                <!-- Modal content -->
                <div class="modal-content">
                    <!-- <span class="close">&times;</span> -->
                    <div class=" w-[400px] flex flex-col">
                        <label for="inputBorn" class="font-bold my-3">
                            when did we start falling in love?
                        </label>
                        <input type="date" id="inputBorn"
                            class="border-2 border-pink-500 rounded-md p-3 focus:outline-none mb-5" v-model="startDate" />
                    </div>
                    <div class="flex justify-end pr-5">
                        <button class="bg-pink-400 px-5 py-2 rounded-md text-black capitalize"
                            @click="updateDay">done</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="snowflakes">
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
            <div class="snowflake"><img src="./image/heart.png"></div>
        </div>
        <h1 class="title">BEEN TOGETHER</h1>

        <div class="box">
            <div class="about">
                <div class="info">
                    <img src="./image/huy.png" class="avatar">
                    <div class="details">
                        <p class="name">{{ male.name }}
                            <fa :icon="['fas', 'pen-to-square']" class=" edit" @click="editMale" />
                        </p>
                        <p class="born">{{ male.born.split('-').reverse().join('.') }}</p>
                    </div>
                </div>
                <div class="heart-box">
                    <img src="./image/hearts.svg" class="heart">
                </div>
                <div class="info">
                    <img src="./image/nga.png" class="avatar">
                    <div class="details">
                        <p class="name">{{ female.name }}
                            <fa :icon="['fas', 'pen-to-square']" class="edit" @click="editFemale" />
                        </p>
                        <p class="born">{{ female.born.split('-').reverse().join('.') }}</p>

                    </div>
                </div>
            </div>
            <div class="time flex justify-center">
                <h2 class="text-red-400 text-xl"><span>{{ numberDay }}</span>&nbsp;Days</h2>
            </div>
            <div class="thank">
                <p class="talk">Thank you for your love !</p>
            </div>
        </div>
        <!-- The Modal -->
        <div id="maleModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <!-- <span class="close">&times;</span> -->
                <div class=" w-[400px] flex flex-col">
                    <label for="inputName" class="font-bold mb-3">Name</label>
                    <input type="text" id="inputName"
                        class="border-2 border-pink-500 rounded-md p-3 uppercase focus:outline-none" v-model="male.name"
                        maxlength="20" />
                    <label for="inputBorn" class="font-bold my-3">Date of birth</label>
                    <input type="date" id="inputBorn"
                        class="border-2 border-pink-500 rounded-md p-3 focus:outline-none mb-5" v-model="male.born" />
                </div>
                <div class="flex justify-end pr-5">
                    <button class="bg-pink-400 px-5 py-2 rounded-md text-black capitalize" @click="maleClose">done</button>
                </div>
            </div>
        </div>
        <div id="femaleModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <!-- <span class="close">&times;</span> -->
                <div class=" w-[400px] flex flex-col">
                    <label for="inputName" class="font-bold mb-3">Name</label>
                    <input type="text" id="inputName"
                        class="border-2 border-pink-500 rounded-md p-3 uppercase focus:outline-none" v-model="female.name"
                        maxlength="20" />
                    <label for="inputBorn" class="font-bold my-3">Date of birth</label>
                    <input type="date" id="inputBorn"
                        class="border-2 border-pink-500 rounded-md p-3 focus:outline-none mb-5" v-model="female.born" />
                </div>
                <div class="flex justify-end pr-5">
                    <button class="bg-pink-400 px-5 py-2 rounded-md text-black capitalize"
                        @click="femaleClose">done</button>
                </div>
            </div>
        </div>
        <!-- End Modal -->
        <div>
            <img src="./image/tree-heart-12.png" width="250.15px" height="300px" class="anhnen">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            male: { name: 'Nguyễn Văn Huy', born: '2000-09-18' },
            female: { name: 'Nguyễn Thị Thanh Nga', born: '2000-06-02' },
            startDate: '',
            numberDay: 0
        }
    },
    methods: {
        setupDate() {
            var modal = document.getElementById("setupDate");
            modal.style.display = "block";
        },
        editMale() {
            var modal = document.getElementById("maleModal");
            modal.style.display = "block";
        },
        editFemale() {
            var modal = document.getElementById("femaleModal");
            modal.style.display = "block";
        },
        maleClose() {
            var modal = document.getElementById("maleModal");
            modal.style.display = "none";
        },
        femaleClose() {
            var modal = document.getElementById("femaleModal");
            modal.style.display = "none";
        },
        caculateDay(startDate) {
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            // This arrangement can be altered based on how we want the date's format to appear.
            let currentDate = `${month}/${day}/${year}`;
            console.log(currentDate);
            console.log(startDate);
            var date1 = new Date(startDate);
            var date2 = new Date(currentDate);
            console.log(date1);
            console.log(date2);
            //calculate time difference  
            var time_difference = date2.getTime() - date1.getTime();
            console.log(time_difference);
            var result = Math.round(time_difference / (1000 * 60 * 60 * 24));
            console.log("date", result);
            return result;
        },
        updateDay() {
            this.numberDay = this.caculateDay(this.startDate);
            var modal = document.getElementById("setupDate");
            modal.style.display = "none";
        }
    },
    watch: {

    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400&subset=vietnamese');

.container {
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    color: rgba(0, 0, 0, 0.653);
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
    text-shadow: 0 .2px .3px rgba(0, 0, 0, 0.353);
}

img {
    max-width: 100%;
}

.anhnen {
    align-items: flex-end;
    position: absolute;
    top: 90px;
    right: 10px;
    width: 533px;
    height: 600px;
}

.box {
    background: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
    padding: 1rem;
    width: 50%;
    border-radius: 26px;
}

.title {
    font-size: 60px;
    margin-bottom: 50px;
}

.about {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: 3rem;
    margin-top: 10px;
    position: relative;
}

.edit {
    padding-left: 10px;
}

/* The Modal (background) */
.modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    /* background-color: rgb(0, 0, 0); */
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */

}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 450px;
}

/* The Close Button */
.close {
    float: right;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}


.info {
    display: flex;
    align-items: center;
}

.info:first-child {
    flex-grow: 1;
}

.info:last-child .avatar {
    order: 1;
}

.info:last-child .detail {
    text-align: right;
}

.avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}

.heart {
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    width: 50px;
    transform-origin: 50% 50%;
    opacity: .8;
    animation: heartBeat 1s ease-in-out infinite;
}

.info .details {
    margin: 0 1rem;
}

.info .details p {
    margin: 10px;
}

.name {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
}

.born {
    font-weight: 300;
}


.talk {
    text-align: center;
    margin-top: 3rem;
    font-weight: 100;
    color: black;
    opacity: .8;
    margin-bottom: 0;
}

.snowflake {
    color: rgb(255, 255, 255);
    font-size: 1em;
    font-family: Arial, sans-serif;
    text-shadow: 0 0 5px #000;
}

@-webkit-keyframes snowflakes-fall {
    0% {
        top: -10%
    }

    100% {
        top: 100%
    }
}

@-webkit-keyframes snowflakes-shake {

    0%,
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    50% {
        -webkit-transform: translateX(80px);
        transform: translateX(80px)
    }
}

@keyframes snowflakes-fall {
    0% {
        top: -10%
    }

    100% {
        top: 100%
    }
}

@keyframes snowflakes-shake {

    0%,
    100% {
        transform: translateX(0)
    }

    50% {
        transform: translateX(80px)
    }
}

.snowflake {
    position: fixed;
    top: -10%;
    z-index: 9999;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    -webkit-animation-name: snowflakes-fall, snowflakes-shake;
    -webkit-animation-duration: 10s, 3s;
    -webkit-animation-timing-function: linear, ease-in-out;
    -webkit-animation-iteration-count: infinite, infinite;
    -webkit-animation-play-state: running, running;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running
}

.snowflake:nth-of-type(0) {
    left: 1%;
    -webkit-animation-delay: 0s, 0s;
    animation-delay: 0s, 0s
}

.snowflake:nth-of-type(1) {
    left: 10%;
    -webkit-animation-delay: 1s, 1s;
    animation-delay: 1s, 1s
}

.snowflake:nth-of-type(2) {
    left: 20%;
    -webkit-animation-delay: 6s, .5s;
    animation-delay: 6s, .5s
}

.snowflake:nth-of-type(3) {
    left: 30%;
    -webkit-animation-delay: 4s, 2s;
    animation-delay: 4s, 2s
}

.snowflake:nth-of-type(4) {
    left: 40%;
    -webkit-animation-delay: 2s, 2s;
    animation-delay: 2s, 2s
}

.snowflake:nth-of-type(5) {
    left: 50%;
    -webkit-animation-delay: 8s, 3s;
    animation-delay: 8s, 3s
}

.snowflake:nth-of-type(6) {
    left: 60%;
    -webkit-animation-delay: 6s, 2s;
    animation-delay: 6s, 2s
}

.snowflake:nth-of-type(7) {
    left: 70%;
    -webkit-animation-delay: 2.5s, 1s;
    animation-delay: 2.5s, 1s
}

.snowflake:nth-of-type(8) {
    left: 80%;
    -webkit-animation-delay: 1s, 0s;
    animation-delay: 1s, 0s
}

.snowflake:nth-of-type(9) {
    left: 90%;
    -webkit-animation-delay: 3s, 1.5s;
    animation-delay: 3s, 1.5s
}

.snowflake:nth-of-type(10) {
    left: 25%;
    -webkit-animation-delay: 2s, 0s;
    animation-delay: 2s, 0s
}

.snowflake:nth-of-type(11) {
    left: 65%;
    -webkit-animation-delay: 4s, 2.5s;
    animation-delay: 4s, 2.5s
}

@keyframes heartBeat {
    0% {
        transform: scale(.9);
    }

    45% {
        transform: scale(1.1);
    }

    70% {
        transform: scale(.9);
    }

    100% {
        transform: scale(.9);
    }
}

@media (max-width: 997px) {
    .box {
        width: 84%;
        margin-bottom: 2rem;
    }

    .title {
        margin: 2rem 0 1rem 0;
        font-size: 18px;
    }

    .about {
        flex-direction: column;
        /* align-items: flex-start; */
        padding: 0;
    }

    .info {
        flex-direction: column;
    }

    .avatar {
        margin-bottom: .5rem;
    }

    .info p {
        text-align: center;
        margin: 10px 0 0 0;
        font-size: 13px;
    }

    .info:last-child .avatar {
        order: 0;
    }

    .heart {
        position: relative;
        margin: 1.4rem 0;
    }

    .say-thank {
        margin-top: 2rem;
    }

    .anhnen {
        display: none;
    }
}
</style>