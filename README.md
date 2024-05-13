# ragemp-handling

Good day!
Many people know that some Handling parameters do not work in RageMP, such as - fInitialDriveMaxFlatVel, fInitialDriveForce and others (to be honest, I do not remember what did not work) however, a very long time ago I found a solution to this problem, maybe someone already found it, well done! But I decided to lay out the simplest possible fix for these parameters, including correcting values where some parameters need to be multiplied or divided by values so that it is 1 in 1 as in the handling file. I will throw off two versions of the code for the convenience of JS and TS.

How to use it?
The script exports several setHandling functions
(veh, key, value) - Sets a parameter, values can be set as in a file
getHandling(veh, key) - Gets the parameter, the values are almost as in the file
fixHandling(veh) - The very fix of parameters that allegedly do not work (As simple as possible)

The parameter is set not on the machine model, but on its unique identifier - handle.
If the car disappears from the drawing radius, you delete it, respawn, etc., it will have standard handling

Important: The script is for the client side!
