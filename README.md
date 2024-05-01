## MDDN 242 2024 Assignment 2

### PicassoFont by Oriana Vitolio

**Final Alphabet font**

<img width="952" alt="preview" src="https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/8e2f7091-9803-4485-ab8a-ab92f9ea4f69">

For this assignment, I played around with different ideas and especially was experimenting with different shapes. As seen in the image above, the theme I ended up going with was a more abstract look and was heavily inspired by the artist Picasso (hence the typeface name). Although I only used three simple shapes, I made sure to include the ability to change x/y coordinates to have letters not share any similarities - this can be said with letters such as b/d, s/z/2/5. The colour choice was a design decision made to contrast each letter from one another. I not only found the colour combination aesthetically pleasing, but it also enables each shape to play a part in creating a letter that not only is abstract and different but also obvious for the reader to look at. 

**Final parameters used:**
 * `RectX` `RectY` `RectWidth` `RectLength`: Rectangle shape and size parameters.
 * `ArcX` `ArcY` `ArcWidth` `ArcLength` `ArcStart` `ArcEnd`: Arc shape and size parameters.
 * `TriX1` `TriY1` `TriX2` `TriY2` `TriX3` `TriY3`: Triangle shape and size parameters.

**Initial sketch for final font**
![IMG_0290](https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/939d5997-2d93-4a1f-a67c-708de1e4fd59|width=100)


---

   
**Initial sketch and assignment understanding**

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

27/03 - Added 2 more parameters to get use to this concept:
 * `length` : y variable for rectangle
 * `radius` : radius of rectangle corners

Tried to add a colour parameter but the letters only show up as different shades of white - [EDIT] because the parameter does not use simple numbers, I opted to having the set colours in the draw_letters.js 

![colour mddn242](https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/805ed967-7088-4127-9da0-56144fcfd904)
![Screenshot 2024-03-27 234802](https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/e864ae86-ceec-4c6d-bfc7-9970535bb2e2)

My initial idea was inspired by the lines that were already in the code (debug lines). It reminded me of doing handwriting practice while in primary and so went on with this inspiration. I created a pencil using all sorts of shapes - this would be used as the left side (or main stem) of the letter- and planned on using grey lines to draw out the rest of the letter shape. I did end up struggling due to having trouble with pencil parameters not working and also found that I wasn't committed to the look. This ultimately made me change my design ideas.
![Screenshot 2024-04-27 221420](https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/21815e50-6833-4567-add7-3599a2d6e534)
![IMG_0289](https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/2b19baee-a816-4f98-a255-7d69fb6695a6)
![IMG_0288](https://github.com/23-2-DSDN242/parametric-letterforms-vitolioria/assets/147349823/1757d955-8dab-4c56-b492-a08c611bf522)


