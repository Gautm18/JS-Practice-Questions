# syntax
const copy = JSON.parse(JSON.stringify(obj));

===========================================================================================================

# Works for simple objects.

const user1 = {
  name: "Gautam",

  address: {
    city: "Bangalore"
  }
};

const user2 =
  JSON.parse(
    JSON.stringify(user1)
  );

## here in the above example deep copy has been created.

==============================================================================================================

# it wont be able to copy the function, if you see the copied value of the object , if function was there in the original object it wont copy function in the copied object

==============================================================================================================

# Date becomes string.

const obj = {
  date: new Date()
};

const copy =
  JSON.parse(
    JSON.stringify(obj)
  );

console.log(copy.date);

===============================================================================================================

# 'undefined' disappears in the copied object.

===============================================================================================================

# MODERN APPROACH - structuredClone()

const copy = structuredClone(obj); ---> Real deep copy.

BUT THIS FUNCTION WILL NOT COPY THE FUNCTION IN THE OBJECT IT WILL THROW THE ERROR.

