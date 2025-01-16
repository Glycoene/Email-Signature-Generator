// 获取2D画笔
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

// 用户数据
let Uname 
let Position
let Department
let DiallingCode
let TeleNum
let Email
let Address

// 图片数据
let SignatureImgData// canvas生成的图片数据
const SignatureImg = document.querySelector("#signatureimg")
const TiananmenImg = new Image()
TiananmenImg.src = "../Source/Tiananmen.png"
TiananmenImg.crossOrigin = "anonymous"
const DovesImg = new Image()
DovesImg.src = "../Source/Doves.png"
DovesImg.crossOrigin = "anonymous"

// 下载链接
const DownloadLink = document.querySelector("#downloadlink")

// 位移常量
const x = 200// 初始x
const y = 68// 初始y
const line = 20// y的位移

function GetInformation()// 获取数据
{
    Uname = document.querySelector("#uname").value
    Position = document.querySelector("#position").value
    Department = document.querySelector("#department").value
    DiallingCode = document.querySelector("#diallingCode").value
    TeleNum = document.querySelector("#telenum").value
    Email = document.querySelector("#email").value
    Address = document.querySelector("#address").value
}

function CreateCanvas()// 生成模板
{
    // 清除画布
    ctx.clearRect(0, 0, 450, 200)

    // 底色
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 450, 200)

    // 绘制图片
    ctx.drawImage(DovesImg, 75, 50, 125, 50)
    ctx.drawImage(TiananmenImg, 0, 70, 200, 100)

    // 30px 蓝字 加粗
    ctx.font = "bold 30px Verdana"
    ctx.fillStyle = "#1A73E8"
    ctx.fillText(`${Uname}`, x, y-10)// 姓名

    // 15px 蓝字 正常粗细
    ctx.font = "normal 15px Verdana"
    ctx.fillText(`+${DiallingCode} ${TeleNum}`, x+40, y + 3*line)// 区号+电话
    ctx.fillText(`${Email}`, x+40, y + 4*line)// 邮箱

    // 15px 黑字 正常粗细
    ctx.fillStyle = "Black"
    ctx.fillText(`${Position}`, x, y + 1*line)// 职位
    ctx.fillText(`F13安全团队 ${Department}`, x, y + 2*line)// 隶属团队
    ctx.fillText(`${Address}`, x+40, y + 5*line)// 地址
    ctx.fillText("电话：", x, y + 3*line)// 电话标签
    ctx.fillText("邮箱：", x, y + 4*line)// 邮箱标签
    ctx.fillText("地址：", x, y + 5*line)// 地址标签
}

function ResetInformation()// 重置数据
{
    // 清空输入框
    document.querySelector("#uname").value = ""
    document.querySelector("#position").value = ""
    document.querySelector("#department").value = "部门"
    document.querySelector("#diallingCode").value = "86"
    document.querySelector("#telenum").value = ""
    document.querySelector("#email").value = ""
    document.querySelector("#address").value = ""

    // 获取初始值
    Uname = document.querySelector("#uname").placeholder
    Position = document.querySelector("#position").placeholder
    Department = document.querySelector("#department").value
    DiallingCode = document.querySelector("#diallingCode").value
    TeleNum = document.querySelector("#telenum").placeholder
    Email = document.querySelector("#email").placeholder
    Address = document.querySelector("#address").placeholder
}

function ChangeSignatureImg()// 创建签名图片
{
    SignatureImgData = canvas.toDataURL("image/png")
    SignatureImg.src = SignatureImgData
}

function DownloadSinatureImg()// 下载签名图片
{
    DownloadLink.href = SignatureImgData
    DownloadLink.download = `${Uname}的签名.png`
}

const CreateButton = document.querySelector("#createbutton")
CreateButton.addEventListener("click", function () {// 监听生成按钮
    GetInformation()
    CreateCanvas()
    ChangeSignatureImg()
})

const ResetButton = document.querySelector("#resetbutton")
ResetButton.addEventListener("click", function () {// 监听重置按钮
    ResetInformation()
    CreateCanvas()
    ChangeSignatureImg()
})

const DownloadButton = document.querySelector("#downloadbutton")
DownloadButton.addEventListener("click", function () {// 监听下载按钮
    DownloadSinatureImg()
})