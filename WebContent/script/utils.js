
/**
 * isdefined v1.0
 * 
 * Check if a javascript variable has been defined.
 * Usage  : alert(isdefined('myvar'));
 * 
 * @author Jehiah Czebotar ( http://www.jehiah.com )
 * 
 * @param variable var to be checked 
 * 
 * @return true|false
 */
function isdefined(variable)
{
    return (typeof(window[variable]) == "undefined")?  false: true;
}
