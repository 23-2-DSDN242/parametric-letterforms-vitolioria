## MDDN 242 2024 Assignment 2

### PicassoFont by Oriana Vitolio

[Final Alphabet font]
<img width="952" alt="preview" src="https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/8e2f7091-9803-4485-ab8a-ab92f9ea4f69">

For this assignment, I played around with different ideas and especially was experimenting with different shapes. As seen in the image above, the theme I ended up going with was a more abstract look and was heavily inspired by the artist Picasso (hence the typeface name). 

Final parameters used:
 * `RectX`  * `RectY`  * `RectWidth`  * `RectLength` : Rectangle shape and size parameters.
 * `ArcX`  * `ArcY`  * `ArcWidth`  * `ArcLength`  * `ArcStart`  * `ArcEnd`: Arc shape and size parameters.
 * `TriX1` * `TriY1` * `TriX2`  * `TriY2`  * `TriX3`  * `TriY3`: Triangle shape and size parameters.
   
[Initial sketch and assignment understanding]

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

27/03 - Added 2 more parameters to get use to this concept:
 * `length` : y variable for rectangle
 * `radius` : radius of rectangle corners

Tried to add a colour parameter but the letters only show up as different shades of white:

![colour mddn242](https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/805ed967-7088-4127-9da0-56144fcfd904)

![Screenshot 2024-03-27 234802](https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/e864ae86-ceec-4c6d-bfc7-9970535bb2e2)
![Screenshot 2024-04-27 221420](https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/21815e50-6833-4567-add7-3599a2d6e534)
