<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="posorder">
        <el-tabs class="postab">
          <el-tab-pane label="点餐">
            <div class="tableNumbDiv">
              <p>
                <span>桌号：</span>
                <input v-model="tableNumb" style="width:100px">
              </p>
            </div>

            <el-table
              :data="goodsTable"
              border
              :summary-method="getSummaries"
              show-summary
              style="width: 100%"
            >
              <el-table-column label="商品" prop="goodsName"></el-table-column>
              <el-table-column label="数量" prop="count"></el-table-column>
              <el-table-column label="单价" prop="price"></el-table-column>
              <el-table-column label="金额" prop="money"></el-table-column>
              <el-table-column label="操作" fixed="right" class="opColumn" align="center">
                <template slot-scope="scope">
                  <div>
                    <el-button type="text" style="color:green" class="ops">
                      <i class="el-icon-plus" @click="AddGoods(scope.row)"></i>
                    </el-button>
                    <el-button type="text" style="color:#E6A23C" class="ops">
                      <i class="el-icon-minus" @click="DecentGoods(scope.row)"></i>
                    </el-button>
                    <el-button type="text" style="color:#F56C6C" class="ops">
                      <i class="el-icon-delete" @click="DeleteGoods(scope.row)"></i>
                    </el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>

            <div class="checkBut">
              <el-button type="success">结账</el-button>
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单"></el-tab-pane>
          <el-tab-pane label="外卖"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="hotGoodsList">
          <ul>
            <li v-for="goods in goodsList" @click="AddGoods(goods)">
              <span v-text="goods.goodsName" class="foodName"></span>
              <span v-text="goods.price" class="price"></span>
            </li>
          </ul>
        </div>
        <div id="allGoodList"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import leftNav from "@/components/common/navLeft";
export default {
  name: "pos",
  data() {
    return {
      tableNumb: 0,
      goodsTable: [],
      goodsList: [
        {
          goodsName: "汉堡",
          price: 18
        },
        {
          goodsName: "薯条",
          price: 7
        },
        {
          goodsName: "可乐",
          price: 9
        },
        {
          goodsName: "鸡米花",
          price: 13
        },
        {
          goodsName: "全家桶",
          price: 88
        }
      ]
    };
  },
  mounted: function() {
    let hi = document.body.clientHeight;
    document.getElementById("posorder").style.height = hi + "px";
  },
  methods: {
    AddGoods(goods) {
      let isExist = false;
      this.goodsTable.forEach(element => {
        if (element.goodsName == goods.goodsName) {
          isExist = true;
          element.count++;
          element.money = element.count * element.price;
        }
      });
      if (!isExist) {
        let newgoods = {
          goodsName: goods.goodsName,
          count: 1,
          price: goods.price,
          money: goods.price
        };
        this.goodsTable.push(newgoods);
      }
    },
    DecentGoods(goods) {
      this.goodsTable.forEach(element => {
        if (element.goodsName == goods.goodsName) {
          element.count--;
          element.money = element.count * element.price;
        }
      });
      this.goodsTable = this.goodsTable.filter(o => o.count != 0);
    },

    DeleteGoods(goods) {
      this.goodsTable = this.goodsTable.filter(
        o => o.goodsName != goods.goodsName
      );
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          if (column.label == "单价") {
            sums[index] = " ";
          } else {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);

            if (column.label == "金额") sums[index] += " 元";
          }
        } else {
          sums[index] = " ";
        }
      });

      return sums;
    }
  }
};
</script>

<style scoped>
.pos {
  height: 100%;
  width: 95%;
  float: left;
}
.pos-order {
  background-color: rgb(238, 236, 236);
  border-right: 1px solid grey;
}
.tableNumbDiv {
  float: left;
  margin-left: 20px;
  font-size: 20px;
  margin-top: -10px;
}
.el-row {
  height: 100%;
  width: 100%;
}
.el-table {
  margin-top: 0px;
}
.checkBut {
  margin-top: 10px;
}
.ops {
  margin-top: -10px;
  margin-bottom: -10px;
}
.hotGoodsList li {
  list-style: none;
  width: 120px;
  height: auto;
  overflow: hidden;
  background-color: rgb(235, 243, 243);
  color: black;
  padding: 2px;
  float: left;
  margin: 10px;
  border: 1px solid darkslategray;
  cursor: pointer;
}
.hotGoodsList li span {
  display: block;
  float: left;
}

.foodName {
  font-size: 16px;
  padding-left: 10px;
  color: brown;
}

.price {
  font-size: 17px;
  padding-left: 10px;
  padding-top: 2px;
  color: dodgerblue;
}
.postab {
  margin-left: 10px;
}
</style>
