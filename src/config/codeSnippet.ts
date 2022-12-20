export const codeSnippetMap: { [extra: string]: string } = {
  commonTable: `import { CommonTable, setPagination } from "ta-biz";
import { Modal } from "antd";
import { withRoleTableBotton } from "yss-biz";

const bindState = ["pagination"];

function TestExample(props) {
//表格内按钮
const ButtonTableType = (item) => {
    return [
    {
        name: "编辑",
        roule: true,
        func: (e, item) => {}
    },
    {
        name: "删除",
        roule: true,
        func: (item, v) => {
        Modal["confirm"]({
            title: "是否要删除数据？",
            content: "是否要删除数据？",
            onOk() {},
            onCancel() {}
        });
        }
    }
    ];
};

const columns = [
    {
    title: "序号",
    dataIndex: "key",
    align: "center",
    key: "key",
    width: 80,
    ellipsis: true
    },
    {
    title: "操作",
    key: "operation",
    width: 250,
    align: "left",
    fixed: "right",
    render: (row) => {
        return withRoleTableBotton(ButtonTableType(row))(row);
    }
    }
];

/**翻页器操作**/
const changePagination = (reqPage, reqPageSize) => {};

const pagination = setPagination(
    props,
    "pagination",
    changePagination,
    changeSync
);

return (
    <CommonTable
    dataSource={[]}
    columns={columns}
    rowKey={"id"}
    resizable={false}
    colDraggable={false}
    rowSelection={rowSelection}
    pagination={pagination}
    />
);
}`,
  addMenu: `
/**
 * @date 2020/6/12
 * 打开新页签
 * @param url    新打开标签页的地址-必须
 * @param title  新打开标签页的标题-必须
 */
export function addMenu(
  url,
  title,
  menuCode, //菜单code码
  routeParams = {}, //参数
  refresh = true, //再次打开刷新界面
  bool = false
) {
  let dev = process.env.NODE_ENV === "development";

  if (!dev && !bool) {
    const type = "addTab";
    bizUtils.postFatherMessage(type, url, menuCode, title, routeParams, refresh);
  } else {
    // 本地环境

    if (!this) return message.warn("本地环境跳转使用: addMenu.call(props.history, menuAddress, menuName, menuCode)");
    const path = url.split("#")[1];
    this.push({
      pathname: path,
      state: routeParams
    });
  }
}`
};
