import React from 'react'
import '../css/In.css'
import '../css/font.css'
export default function inpro() {
    
    return (
        <div className = "product">
       
        <form method="post" enctype="multipart/form-data" action="insert_product_up.php">
            <div className ="Text">
            <h >เพิ่มสินค้า</h>
            </div>
            <div className = "Table">
            <table class='table  table-striped'>
            <tr>
                <td class="td1 ">ชื่อ : </td>
                <td class="td2"><input type="text" name="slip_name" size="30" required></input></td>
            </tr>
            <tr>
                <td class="td1">วันที่โอน : </td>
                <td class="td2"><input type="date" name="slip_date" size="30" required></input></td>
            </tr>

            <tr>
                <td class="td1">จำนวนเงินที่โอน : </td>
                <td class="td2"><input type="text" name="slip_total" size="30" required></input></td>
            </tr>
            <tr>
                <td class="td1">หมายเลขคำสั่งซื้อ : </td>
                <td class="td2"><input type="text" name="sale_id" size="30" required></input></td>
            </tr>
            <tr>
            <td class="td1">รูป : </td>
                <td class="td2"><input type="file" name="slip_img" accept="image/*" required></input></td>
            </tr>
            <div className ="bu">
            <button class="b-in" type="submit" >บันทึก</button>
            <button type="reset" class="b-in2">ล้าง</button>
            </div>
            </table>
            </div>
            </form>
        </div>
    )
}
