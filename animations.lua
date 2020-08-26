--  VARIABLES
local phoneModel = "prop_phone_ing_03_lod"
local phoneHash = GetHashKey(phoneModel)
local phone = 0
function newPhoneProp()
	local x,y,z = table.unpack(GetEntityCoords(GetPlayerPed(-1), true))
	RequestModel(phoneHash)
	while not HasModelLoaded(phoneHash) do
		Citizen.Wait(100)
	end
	return CreateObject(phoneHash, 1.0, 1.0, 1.0, 1, 1, 0)
end

function _TakePhone()
    local dict = "cellphone@"
    local animationName = "cellphone_text_in"
    local bone = GetPedBoneIndex(GetPlayerPed(-1), 28422)
    RequestAnimDict(dict)
	while not HasAnimDictLoaded(dict) do
		Citizen.Wait(100)
	end
    TaskPlayAnim(GetPlayerPed(-1), dict, animationName , 5.0, -1, -1, 50, 0, false, false, false)
    Citizen.Wait(157)
    phone = newPhoneProp()
    AttachEntityToEntity(phone, GetPlayerPed(-1), bone, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1, 1, 0, 0, 2, 1)

end

function _PutPhoneAway()
    local dict = "cellphone@"
    local animationName = "cellphone_text_out"
    RequestAnimDict(dict)
	while not HasAnimDictLoaded(dict) do
		Citizen.Wait(100)
	end
    TaskPlayAnim(GetPlayerPed(-1), dict, animationName, 5.0,-1, -1, 50, 0, false, false, false)
    Citizen.Wait(500)
    StopAnimTask(GetPlayerPed(-1), dict, animationName, 1.0)
    DeleteEntity(phone)
end
