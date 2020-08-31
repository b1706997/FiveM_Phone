local display = false;
RegisterCommand('phone',function(data)
    take_phone_out()
end)
RegisterCommand('nophone',function(data)
    put_phone_in()
end)
-- Turn on / off phone
function SetDisplay(bool)
    display = bool
    -- SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

function take_phone_out()
    SetDisplay(true)
    _TakePhone() -- Animation
    print(display)
end

function put_phone_in()
    SetDisplay(false)
    _PutPhoneAway() -- Animation
    print(display)
end

-- AddEventHandler('onClientResourceStart', function (resourceName)
--     if(GetCurrentResourceName() ~= resourceName) then
--       return
--     end
--     SetPedConfigFlag(PlayerPedId(), 242, not true)
--     SetPedConfigFlag(PlayerPedId(), 243, not true)
--     SetPedConfigFlag(PlayerPedId(), 244, true)
-- end)

Citizen.CreateThread(function() 
    while true do
        Citizen.Wait(0)
        if IsControlJustReleased(1, 173) then -- 173=>CELLPHONE_ARROW_DOWN
            if display then
                put_phone_in()
            else
                take_phone_out()
            end
        end
    end
end)

-- Citizen.CreateThread(function()
--     while display do
--         Citizen.Wait(1)
--         -- https://runtime.fivem.net/doc/natives/#_0xFE99B66D079CF6BC
--         --[[ 
--             inputGroup -- integer , 
-- 	        control --integer , 
--             disable -- boolean 
--         ]]
--         -- DisableControlAction(0, 1, display) -- LookLeftRight
--         -- DisableControlAction(0, 2, display) -- LookUpDown
--         -- DisableControlAction(0, 142, display) -- MeleeAttackAlternate
--         -- DisableControlAction(0, 18, display) -- Enter
--         -- DisableControlAction(0, 322, display) -- ESC
--         -- DisableControlAction(0, 106, display) -- VehicleMouseControlOverride

        

--     end
-- end)

