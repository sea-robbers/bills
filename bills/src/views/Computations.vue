<template>
    <div id="com">
        <div class="box">
            <ul>
                <li>
                    <span>总资产 ：</span>
                    <div @click="btn($event)">{{input_1}}</div>
                    <input class="el-input" v-model="input_1">
                    <i class="el-icon-success icon" @click="iconi($event)"></i>
                </li>
                <li>
                    <span>花销-衣：</span>
                    <div @click="btn($event)">{{input_2}}</div>
                    <input class="el-input" v-model="input_2">
                    <i class="el-icon-success icon" @click="iconi($event)"></i>
                </li>
                <li>
                    <span>花销-食：</span>
                    <div @click="btn($event)">{{input_3}}</div>
                    <input class="el-input" v-model="input_3">
                    <i class="el-icon-success icon" @click="iconi($event)"></i>
                </li>
                <li>
                    <span>花销-住：</span>
                    <div @click="btn($event)">{{input_4}}</div>
                    <input class="el-input" v-model="input_4">
                    <i class="el-icon-success icon" @click="iconi($event)"></i>
                </li>
                <li>
                    <span>花销-行：</span>
                    <div @click="btn($event)">{{input_5}}</div>
                    <input class="el-input" v-model="input_5">
                    <i class="el-icon-success icon" @click="iconi($event)"></i>
                </li>
                <li>
                    <span>花销-学习：</span>
                    <div @click="btn($event)">{{input_6}}</div>
                    <input class="el-input" v-model="input_6">
                    <i class="el-icon-success icon" @click="iconi($event)"></i>
                </li>
                <li>
                    <span>花销-娱乐：</span>
                    <div @click="btn($event)">{{input_7}}</div>
                    <input class="el-input" v-model="input_7">
                    <i class="el-icon-success icon" @click="iconi($event)"></i>
                </li>
                <li>
                    <span>花销-借出还账：</span>
                    <div @click="btn($event)">{{input_8}}</div>
                    <input class="el-input" v-model="input_8">
                    <i class="el-icon-success icon" @click="iconi($event)"></i>
                </li>
                <li>
                    <span>花销-日常用品：</span>
                    <div @click="btn($event)">{{input_9}}</div>
                    <input class="el-input" v-model="input_9">
                    <i class="el-icon-success icon" @click="iconi($event)"></i>
                </li>
            </ul>
        </div>
        <div class="amount">
            <div class="amount-one">
                <div class="months">结余金额：{{monthsMod}}</div>
                <div class="year">稳步一年金额：{{yearMod}}</div>
            </div>
            <div class="Com-pri">
                <el-button type="primary">
                    <router-link to="/record">前往记录</router-link>
                </el-button>
                <el-button type="warning">恢复默认</el-button>
                <el-button type="success" @click='success'>提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input_1: "100",
                input_2: "1",
                input_3: "2",
                input_4: "3",
                input_5: "4",
                input_6: "5",
                input_7: "6",
                input_8: "7",
                input_9: "8",
                monthsMod: '',
                yearMod: '',
                dataArr:[]
            };
        },
        methods: {
            btn(event) {
                let $DOM = $(event.currentTarget);
                $DOM.siblings("input").show();
                $DOM.siblings("i").show();
            },
            iconi(event) {
                let $DOM = $(event.currentTarget);
                let $DomInput = $DOM.siblings("input");
                $DomInput.hide();
                $DOM.hide();
            },
            success() {
                let $DomInp = $('.el-input');
                this.dataArr = [];
                for(let i = 0; i< $DomInp.length; i++){
                    this.dataArr.push($DomInp.eq(i).val())
                }
                this.monthsMod = (this.input_1 - 0) - (this.input_2 - 0) - (this.input_3 - 0) - (this.input_4 - 0) - (this.input_5 - 0) - (this.input_6 - 0) - (this.input_7 - 0) - (this.input_8 - 0) - (this.input_9 - 0);
                this.yearMod = this.monthsMod * 12;

                $('input').hide()
                $('.icon').hide()
            }
        }
    };
</script>
<style>
    #com .box li {
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        border-bottom: 1px solid #ccc;
        height: 50px;
        line-height: 50px;
    }
    #com .box li:nth-child(1) {
        border-top: 1px solid #ccc;
    }
    .el-input {
        position: absolute;
        top: 8px;
        left: 65px;
        width: 224px;
        height: 36px;
        border-radius: 6px;
        padding-left: 6px;
        border: 1px solid #666;
        display: none;
    }
    .el-input:focus {
        border: 1px solid greenyellow;
    }
    .icon {
        position: absolute;
        top: 18px;
        right: 10px;
        color: greenyellow;
        font-size: 18px;
        border-radius: 50%;
        display: none;
    }
    #com .box li:nth-last-child(1) .el-input {
        left: 112px;
        width: 176px;
    }
    #com .box li:nth-last-child(2) .el-input {
        left: 112px;
        width: 176px;
    }
    #com .box li:nth-last-child(3) .el-input {
        left: 80px;
        width: 208px;
    }
    #com .box li:nth-last-child(4) .el-input {
        left: 80px;
        width: 208px;
    }
    .amount-one {
        height: 60px;
        line-height: 30px;
        font-size: 16px;
    }
    .Com-pri {
        margin-bottom: 8px;
    }
    .Com-pri .el-button {
        height: 32px;
        padding-top: 0;
        padding-bottom: 0;
        line-height: 32px;
    }
    .Com-pri .el-button a{
        color: greenyellow;
    }
    .Com-pri .el-button:nth-child(1) {
        margin-left: 5px;
    }
</style>
