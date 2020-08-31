--  VARIABLES
local phoneModel = "prop_phone_ing_03_lod"
local phoneHash = GetHashKey(phoneModel)
local phone = 0
-- function newPhoneProp()
-- 	local x,y,z = table.unpack(GetEntityCoords(GetPlayerPed(-1), true))
-- 	RequestModel(phoneHash)
-- 	while not HasModelLoaded(phoneHash) do
-- 		Citizen.Wait(100)
-- 	end
-- 	return CreateObject(phoneHash, 1.0, 1.0, 1.0, 1, 1, 0)
-- end

function _TakePhone()
    -- local dict = "cellphone@"
    -- local animationName = "cellphone_text_in"
    -- local bone = GetPedBoneIndex(GetPlayerPed(-1), 28422)
    -- RequestAnimDict(dict)
	-- while not HasAnimDictLoaded(dict) do
	-- 	Citizen.Wait(100)
	-- end
    -- TaskPlayAnim(GetPlayerPed(-1), dict, animationName , 1.0, -1, -1, 50, 0, false, false, false)
    -- -- TaskPlayAnim(GetPlayerPed(-1), dict, animationName, 1.0,-1, 5, 50, 0, false, false, false)

    -- Citizen.Wait(300)
    -- phone = newPhoneProp()
    -- AttachEntityToEntity(phone, GetPlayerPed(-1), bone, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1, 1, 0, 0, 2, 1)
    SetPedConfigFlag(PlayerPedId(), 242, not true)
    SetPedConfigFlag(PlayerPedId(), 243, not true)
    SetPedConfigFlag(PlayerPedId(), 244, true)
    
    Phone(55,-27)
    CreateMobilePhone(0)
    
end

function Floatify(Int)
    return Int + .0
  end
  
function Phone(X,Y,P,Yaw,R,Z,S)
    SetMobilePhonePosition(Floatify(X or 0),Floatify(Y or 5),Floatify(Z or -60))
    SetMobilePhoneRotation(Floatify(P or -90),Floatify(Yaw or 0),Floatify(R or 0)) -- 75<X<75
    SetMobilePhoneScale(Floatify(S or 250))
end

function _PutPhoneAway()
    DestroyMobilePhone()
    -- local dict = "cellphone@"
    -- local animationName = "cellphone_cellphone_outro"
    -- RequestAnimDict(dict)
	-- while not HasAnimDictLoaded(dict) do
	-- 	Citizen.Wait(100)
	-- end
    -- TaskPlayAnim(GetPlayerPed(-1), dict, animationName , 1.0, -1, -1, 50, 0, false, false, false)
    -- -- Citizen.Wait(1000)
    -- -- StopAnimTask(GetPlayerPed(-1), dict, animationName, 1.0)
    -- DeleteEntity(phone)
end
