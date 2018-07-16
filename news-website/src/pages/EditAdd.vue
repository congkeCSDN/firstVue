<template>
    <div>
        <form action="">
            <div class="form-group">
                <label for="username">用户名：</label>
                <input type="text" class="form-control" id="username" placeholder="请输入用户名" v-model="username">
            </div>
            <div class="form-group">
                <label for="sex">性别：</label>
                <select name="" id="sex" class="form-control" v-model="sex">
                    <option value="">请输入性别</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="unknown">unknown</option>
                </select>
                <!--<input type="text" class="form-control" id="sex" placeholder="请输入性别" v-model="sex">-->
            </div>
            <div class="form-group">
                <input type="button" class="btn btn-primary" value="添加" @click="add()">
                <input type="reset" class="btn btn-danger" value="重置">
            </div>
        </form>
        <!--表格-->
        <table class="table table-bordered table-striped table-hover">
            <caption class="h3 text-info text-center">用户信息表</caption>
            <tbody>
            <tr class="info">
                <th class="text-center">序号</th>
                <th class="text-center">用户名</th>
                <th class="text-center">性别</th>
                <th class="text-center">操作</th>
            </tr>
            <tr class="text-center" v-for="(item,index) in userList">
                <td>{{index+1}}</td>
                <td>{{item.username}}</td>
                <td>{{item.sex}}</td>
                <td>
                    <input type="button" value="删除" class="btn btn-warning" data-toggle="modal" data-target="#myModal" @click="nowIndex = index;changeTips(nowIndex)">
                </td>
            </tr>
            <tr v-show="userList.length == 0">
                <td class="text-danger text-center" colspan="4" style="line-height: 1.5">
                    暂无数据。。。
                </td>
            </tr>
            </tbody>
        </table>
        <!--删除全部-->
        <div v-show="userList.length != 0">
            <button class="btn btn-block btn-danger btn-lg" data-toggle="modal" data-target="#myModal" @click="nowIndex = -1;achangeTips()">删除全部</button>
        </div>
        <!--模态框-->
        <div class="modal fade" tabindex="-1" role="dialog" id="myModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button class="close" type='button' data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title">提示信息：</h4>
                    </div>
                    <div class="modal-body">
                        <p>{{tips}}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="delList(nowIndex)">确认</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userList: [
                    {username:'嗯嗯',sex:'male'},
                    // {username:'嗷嗷',sex:'female'}
                ],
                username: '',
                sex: '',
                nowIndex: -99,
                tips: ''
            }
        },
        methods: {
            add() {
                if(this.username == '' || this.sex == ''){
                    return false;
                }else{
                    this.userList.push({
                        username: this.username,
                        sex: this.sex
                    });
                    this.username = '',
                        this.sex = ''
                }
            },
            delList(n) {
                if(n == -1) {
                    this.userList = [];
                }else{
                    this.userList.splice(n,1);
                }
            },
            changeTips(n) {
                this.tips = `确认要删除第${n+1}信息吗？`;
            },
            achangeTips(){
                this.tips = '确认要删除全部吗？';
            }
        }
    }
</script>

<style scoped>
    .table>tbody>tr>td{line-height: 3}
</style>