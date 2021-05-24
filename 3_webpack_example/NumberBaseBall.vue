<template>
    <div>
        <div>{{result}}</div>
        <!-- <form v-on:submit="onSubmitForm"> -->
        <form @submit.prevent="onSubmitForm">
            <input ref="answer" maxlength="4" v-model="value"/>
            <button>input</button>
        </form>
        <div>Try Count : {{tries.length}}</div>
        <ul>
            <!-- <li @for="i in tries">   v-for 는 @for로 대체될 수 없음 -->
            <li v-for="i in tries">
                <div>{{i.input}}</div>
                <div>{{i.result}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    const getRandomFourNumber = () => {
        let ret = [];
        const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0 ; i < 4 ; i++) {
            let randomNum = Math.random() * numList.length;
            ret.push(numList[parseInt(randomNum, 10)]);
            numList.splice(randomNum, 1)
        }
        //console.log("ret = ", ret);
        return ret;
    };

                                // Vue에서는 import와 export가 쌍, Node에서는 require와 module.exports 쌍
    export default {            // Vue.component('name',  대신 export default가 사용됨
        data() {
            return {
                answer: getRandomFourNumber(),
                tries: [],
                value: '',
                result: '',
            }
        },
        methods: {
            onSubmitForm() {
            //onSubmitForm(e) {
                // e.preventDefault();              @submit.prevent에 의해 대체될 수 있음
                console.log(this.answer);
                if (this.value === this.answer.join('')) {
                    this.tries.push({
                        input: this.value,
                        result: '홈런(정답)',
                    })
                    this.result = '홈런(정답)';
                    alert('홈런(정답)입니다. 게임 재시작합니다.')
                    
                    // 게임 초기화 하기
                    this.tries = [];
                    this.answer = getRandomFourNumber();
                } else {
                    if (this.tries.length >= 9) {
                        //this.result = `실패입니다. 정답은 ${this.answer} 입니다.`;
                        this.result = `실패입니다. 정답은 ${this.answer.join('')} 입니다.`;
                        alert('게임을 재시작합니다.');
                        this.value = '';
                        this.tries = [];
                        this.answer = getRandomFourNumber();
                    }
                    let strikeCount = 0;
                    let ballCount = 0;
                    for (let i = 0 ; i < 4 ; i++) {
                        if (this.answer[i] === parseInt(this.value[i])) {
                            strikeCount++;
                        } else if (this.answer.includes(parseInt(this.value[i]))) {
                            ballCount++;
                        }
                    }
                    
                    this.tries.push({
                        input:  this.value,
                        result: `${strikeCount} 스트라이크 ${ballCount} 볼`,
                    });
                }

                this.value = '';
                this.$refs.answer.focus();
            }
        }
    };
</script>

<style>
</style>