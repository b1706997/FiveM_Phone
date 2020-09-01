phone = false
txd = nil
duiObj = nil
duiHandle = nil
tx = nil
url = 'nui://phone/myphone/public/index.html'
-- url = 'www.google.com'
-- Display
width = 450
height = 640
-- Button
PhoneOpenButt = 27
PhoneCloseButt = 177
-- CONSTRUCTOR
AddEventHandler('onClientResourceStart', function (resourceName)
    if(GetCurrentResourceName() ~= resourceName) then
      return
    end
    -- Ped config flag for open the phone 
    SetPedConfigFlag(PlayerPedId(), 242, not true)
    SetPedConfigFlag(PlayerPedId(), 243, not true)
    SetPedConfigFlag(PlayerPedId(), 244, true)

    txd = CreateRuntimeTxd('phone')
    duiObj = CreateDui(url,width,height)
    duiHandle = GetDuiHandle(duiObj)
    tx = CreateRuntimeTextureFromDuiHandle(txd,'playerPhone', duiHandle)
    Phone(55,-27)
end)

RegisterNUICallback('path', function(data)
    print(data.text)
end)

RegisterCommand('path', function() 
    send_dui({})
end)

function send_dui(data)
    SendDuiMessage(duiObj,json.encode(data))
    -- print(data)
end

function open_phone()
    CreateMobilePhone(0)
    -- SendDuiMessage(duiObj,json.encode({
    --     type='open'
    -- }))
    send_dui({type='open'})
    phone = true
    print(phone)
end

function Floatify(Int)
    return Int + .0
  end
  
function Phone(X,Y,P,Yaw,R,Z,S)
    SetMobilePhonePosition(Floatify(X or 0),Floatify(Y or 5),Floatify(Z or -60))
    SetMobilePhoneRotation(Floatify(P or -90),Floatify(Yaw or 0),Floatify(R or 0)) -- 75<X<75
    SetMobilePhoneScale(Floatify(S or 250))
end

function close_phone()
    DestroyMobilePhone()
    -- SendDuiMessage(duiObj,json.encode({
    --     type='close'
    -- }))
    send_dui({type='close'})
    Wait(500)
    phone = false
    print(phone)
end

CreateThread(function() 
    -- While the phone is turn on do these
    while true do Wait(0) 
        if(phone==true) then
            print('phone')
        -- Phone condition
            -- DisableControlAction(1, 200, true)
            -- DisableControlAction(1, 199, true)
            if GetFollowPedCamViewMode() == 4 then
                SetMobilePhoneScale(Floatify(0))
            else
                SetMobilePhoneScale(Floatify(300))
            end
            SetPauseMenuActive(false)
            if(IsControlJustPressed(3, 172)) then -- UP
                send_dui({type='navigate',content='up'})
                CellCamMoveFinger(1)
                print('up')
            end
            if(IsControlJustPressed(3, 173)) then -- DOWN
                send_dui({type='navigate',content='down'})
                CellCamMoveFinger(2)
                print('down')
            end
            if(IsControlJustPressed(3, 174)) then  --LEFT
                send_dui({type='navigate',content='left'})
                CellCamMoveFinger(3)
                print('left')
            end
            if(IsControlJustPressed(3, 175)) then -- RIGHT
                send_dui({type='navigate',content='right'})
                CellCamMoveFinger(4)
                print('right')
            end
            if(IsControlJustPressed(3, 176)) then -- SELECT
                send_dui({type='navigate',content='select'})
                CellCamMoveFinger(5)
                print('select')
            end
            if(IsControlJustPressed(1, 194)) then -- CANCLE
                send_dui({type='navigate',content='cancle'})
                CellCamMoveFinger(3)
                print('cancle')
            end

            

            -- Render phone
            local phoneRenderId = GetMobilePhoneRenderId()
            SetTextRenderId(phoneRenderId)
            DrawSprite('phone', 'playerPhone', 0.5, 0.5, 1.0, 1.0, 0, 255, 255, 255, 255)
        end    
    end
end)

CreateThread(function() 
    -- Turn on/off phone listener
    while true do 
        Wait(0)
        if(IsControlJustPressed(1, PhoneOpenButt)) then
            open_phone()
        end
        if(IsControlJustPressed(3, 177)) then
            close_phone()
        end
        -- SetPauseMenuActive(false)
        -- print(phone)
    end
end)

